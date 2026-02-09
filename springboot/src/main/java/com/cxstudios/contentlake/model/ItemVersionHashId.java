package com.cxstudios.contentlake.model;

import java.io.Serializable;

/**
 * Composite key for {@link ItemVersionHash}.
 */
public record ItemVersionHashId(
        String sourceUri,
        Integer version,
        String sourcePath,
        String itemType,
        String usagePath
) implements Serializable {
}
