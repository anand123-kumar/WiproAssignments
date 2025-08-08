package com.springbootbeanfiles;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class PropertyReader {

    @Value("${app.name:SpringBootApp}")
    private String appName;

    @Value("${app.version:1.0}")
    private String appVersion;

    public String getAppName() {
        return appName;
    }

    public String getAppVersion() {
        return appVersion;
    }

    @Override
    public String toString() {
        return "PropertyReader{" +
                "appName='" + appName + '\'' +
                ", appVersion='" + appVersion + '\'' +
                '}';
    }

	public void printValues() {
		
	}
}
