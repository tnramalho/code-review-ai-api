import { Body, Controller, Post } from '@nestjs/common';
import { ClaudeApiService } from './claude-api.service';

@Controller('claude-api/')
export class ClaudeApiController {
  constructor(private readonly claudeApiService: ClaudeApiService) {}

  @Post('code-review')
  async codeReview(@Body('content') content: string) {
    return await this.claudeApiService.codeReview(content);
  }
}
