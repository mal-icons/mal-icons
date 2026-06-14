import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-download-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcDownload24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.75 17.25a0.750.75 0 0 1 0.750.75v2.25c0 0.140.110.250.250.25h12.5a0.250.25 0 0 0 0.25-0.25V18a0.750.75 0 0 1 1.5 0v2.25A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V18a0.750.75 0 0 1 0.75-0.75Z"}],["path",{"d":"M5.22 9.97a0.750.75 0 0 1 1.06 0l4.97 4.97V2.75a0.750.75 0 0 1 1.5 0v12.19l4.97-4.97a0.750.75 0 1 1 1.06 1.06l-6.25 6.25a0.750.75 0 0 1-1.06 0l-6.25-6.25a0.750.75 0 0 1 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcDownload24;
