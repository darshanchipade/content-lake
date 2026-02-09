package com.cxstudios.contentlake.repository;

import com.cxstudios.contentlake.model.RawDataStore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RawDataStoreRepository extends JpaRepository<RawDataStore, UUID> {
    /**
     * Finds raw data by source URI.
     */
    Optional<RawDataStore> findBySourceUri(String sourceUri);
    /**
     * Finds raw data by content hash.
     */
    Optional<RawDataStore> findByContentHash(String contentHash);
    /**
     * Finds raw data by source URI and content hash.
     */
    Optional<RawDataStore> findBySourceUriAndContentHash(String sourceUri, String contentHash);
    /**
     * Loads the latest raw data version for a source URI.
     */
    Optional<RawDataStore> findTopBySourceUriOrderByVersionDesc(String sourceUri);
    /**
     * Loads the previous raw data version for a source URI.
     */
    Optional<RawDataStore> findTopBySourceUriAndVersionLessThanOrderByVersionDesc(String sourceUri, Integer version);
}