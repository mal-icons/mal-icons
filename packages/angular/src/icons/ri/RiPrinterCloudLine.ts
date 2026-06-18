import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-printer-cloud-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPrinterCloudLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 2C17.55 2 18 2.45 18 3V7H21C21.55 7 22 7.45 22 8V13.32C21.82 13.08 21.62 12.84 21.39 12.61C20.96 12.18 20.5 11.84 20 11.58V9H4V17H6V16C6 15.45 6.45 15 7 15H12.19C12.17 15.09 12.15 15.19 12.12 15.28C11.69 15.57 11.31 15.93 10.98 16.36C10.82 16.56 10.68 16.78 10.56 17H8V20H10.05C10.16 20.73 10.44 21.4 10.87 22H7C6.45 22 6 21.55 6 21V19H3C2.45 19 2 18.55 2 18V8C2 7.45 2.45 7 3 7H6V3C6 2.45 6.45 2 7 2H17ZM16 4H8V7H16V4ZM8 10V12H5V10H8ZM21 16.5C21 14.57 19.43 13 17.5 13C15.57 13 14 14.57 14 16.5L14 16.6C12.85 16.93 12 17.99 12 19.25C12 20.71 13.14 21.91 14.58 22L14.75 22H20.25L20.42 22C21.86 21.91 23 20.71 23 19.25C23 17.99 22.15 16.93 21 16.6L21 16.5ZM16.01 16.36C16.08 15.59 16.72 15 17.5 15C18.28 15 18.92 15.59 18.99 16.36L19 16.5V18.12C19.7 18.32 20.18 18.45 20.44 18.53C20.84 18.63 21.08 19.04 20.97 19.44C20.89 19.78 20.58 20 20.26 20H14.74C14.42 20 14.11 19.78 14.03 19.44C13.92 19.04 14.16 18.63 14.56 18.53C14.79 18.46 15.2 18.35 15.78 18.18L16 18.12V16.5L16.01 16.36Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPrinterCloudLine;
