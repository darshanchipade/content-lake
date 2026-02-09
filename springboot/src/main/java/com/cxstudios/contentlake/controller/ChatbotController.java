
package com.cxstudios.contentlake.controller;

import com.cxstudios.contentlake.model.ChatbotRequest;
import com.cxstudios.contentlake.model.ChatbotResultDto;
import com.cxstudios.contentlake.service.ChatbotService;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/chatbot")
public class ChatbotController {

    private final ChatbotService chatbotService;

    /**
     * Creates a controller that delegates chatbot queries to the service layer.
     */
    public ChatbotController(ChatbotService chatbotService) {
        this.chatbotService = chatbotService;
    }

    /**
     * Validates the incoming request and returns chatbot search results.
     */
    @PostMapping("/query")
    public ResponseEntity<List<ChatbotResultDto>> chat(@RequestBody(required = false) ChatbotRequest request) {
        if (request == null || !StringUtils.hasText(request.getMessage())) {
            return ResponseEntity.badRequest().body(Collections.emptyList());
        }
        return ResponseEntity.ok(chatbotService.query(request));
    }

    // Placeholder: keep the bean wiring flexible if AI flow returns in the future.
//    @PostMapping("/query-ai")
//    public ResponseEntity<List<ChatbotResultDto>> aiQuery(@RequestBody ChatbotRequest request) {
//        ...
//    }
}
