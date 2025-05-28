import { buildLogger } from "../../src/plugins";
import { logger as winstonlogger } from "../../src/plugins/logger.plugin";

describe("logger plugin test", () => {
  test("buildLogger should return a fuctn logger ", () => {
    const logger = buildLogger("string");
    expect(typeof logger.error).toBe("function");
    expect(typeof logger.log).toBe("function");
  });

  test("logger.log should log a message", () => {
    const winstonLoggerMock = jest.spyOn(winstonlogger, "log");
    const message = "test message";
    const service = "user-service";

    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });

  test("logger.error should log an error message", () => {
    const winstonLoggerMockError = jest.spyOn(winstonlogger, "error");
    const message = "test message";
    const service = "user-service";

    const logger = buildLogger(service);
    logger.error(message);

    expect(winstonLoggerMockError).toHaveBeenCalledWith('error', expect.objectContaining( {
  
      message,
      service,

    }));
  });
});
