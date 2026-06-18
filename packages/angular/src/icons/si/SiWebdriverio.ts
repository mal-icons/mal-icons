import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-webdriverio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWebdriverio {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.88 0C0.84 0 0 0.84 0 1.88v20.25C0 23.16 0.84 24 1.88 24h20.25C23.16 24 24 23.16 24 22.13V1.88C24 0.84 23.16 0 22.13 0ZM2.25 6H3V18H2.25ZM9.34 6H10.13L5.29 18H4.5ZM16.13 6c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6-3.31 0-6-2.69-6-6 0-3.31 2.69-6 6-6zm0 0.75c-2.9 0-5.25 2.35-5.25 5.25 0 2.9 2.35 5.25 5.25 5.25 2.9 0 5.25-2.35 5.25-5.25 0-2.9-2.35-5.25-5.25-5.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWebdriverio;
