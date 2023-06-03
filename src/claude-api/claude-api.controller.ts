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
    return await this.claudeApiService.codeReview(codeAsContext, codeToReview);
  }

  @Post('chat')
  async chat(@Body('content') content: string) {
    return await this.claudeApiService.codeReviewChat(content);
  }

  @Post('proxy')
  async prompt(@Body() aiSettings: SamplingParameters) {
    return await this.claudeApiService.sendToAI(aiSettings);
  }
}
