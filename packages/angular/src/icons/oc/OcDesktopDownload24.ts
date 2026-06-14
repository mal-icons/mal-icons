import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-desktop-download-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcDesktopDownload24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.25 9.33V0.75a0.750.75 0 0 1 1.5 0v8.58l1.95-2.11A0.750.75 0 1 1 15.8 8.24l-3.25 3.52a0.750.75 0 0 1-1.1 0l-3.25-3.52A0.750.75 0 1 1 9.3 7.22l1.95 2.11Z"}],["path",{"d":"M2.5 3.75v11.5c0 0.140.110.250.250.25h18.5a0.250.25 0 0 0 0.25-0.25V3.75a0.250.25 0 0 0-0.25-0.25h-5.5a0.750.75 0 0 1 0-1.5h5.5c0.97 0 1.750.78 1.75 1.75v11.5A1.75 1.75 0 0 1 21.25 17h-6.2c0.17 1.380.81 2.65 1.77 3.76A0.750.75 0 0 1 16.25 22h-8.5a0.750.75 0 0 1-0.57-1.24c0.97-1.1 1.6-2.38 1.77-3.76H2.75A1.75 1.75 0 0 1 1 15.25V3.75C1 2.78 1.78 2 2.75 2h5.5a0.750.75 0 0 1 0 1.5h-5.5a0.250.25 0 0 0-0.250.25ZM10.46 17c-0.13 1.27-0.56 2.44-1.22 3.5h5.52c-0.66-1.05-1.1-2.23-1.22-3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcDesktopDownload24;
