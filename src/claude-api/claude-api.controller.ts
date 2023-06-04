import { Body, Controller, Post } from '@nestjs/common';
import { ClaudeApiService } from './claude-api.service';
import { SamplingParameters } from '@anthropic-ai/sdk';

@Controller('claude-api/')
export class ClaudeApiController {
  constructor(private readonly claudeApiService: ClaudeApiService) {}

  @Post('code-review')
  async codeReview(
    @Body('codeAsContext') codeAsContext: string,
    @Body('codeToReview') codeToReview: string,
  ) {
    console.log('>>>> codeReview ', codeAsContext);
    return await this.claudeApiService.codeReview(codeAsContext, codeToReview);
  }

  @Post('chat-old')
  async chat(@Body('content') content: string) {
    console.log('>>>> chat >>>', content);
    return await this.claudeApiService.codeReviewChat(content);
  }

  @Post('chat')
  async prompt(@Body() aiSettings: SamplingParameters) {
    //console.log('>>>> proxy >> ', aiSettings);
    return (await this.claudeApiService.sendToAI(aiSettings)).completion;
  }
}
