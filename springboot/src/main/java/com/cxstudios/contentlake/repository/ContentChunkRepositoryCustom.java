package com.cxstudios.contentlake.repository;

import com.cxstudios.contentlake.model.ContentChunkWithDistance;
import java.util.List;
import java.util.Map;

public interface ContentChunkRepositoryCustom {
    /**
     * Finds content chunks similar to the provided embedding with optional filters.
     */
    List<ContentChunkWithDistance> findSimilar(
            float[] embedding,
            String original_field_name,
            String[] tags,
            String[] keywords,
            Map<String, Object> contextMap,
            Double threshold,
            int limit,
            String sectionKeyFilter
    );
}