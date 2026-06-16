import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-transfer-within-a-station",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtTransferWithinAStation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.49 13.75 14 16.25l2.49 2.5V17H22v-1.5h-5.51zm3.02 6H14v1.5h5.51V23L22 20.5 19.51 18zM7.5 3.5c0 1.10.9 2 2 2s2-0.9 2-2-0.9-2-2-2-2 0.9-2 2zm2.05 6.9C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-0.95-1.6C9.35 6.35 8.7 6 8 6c-0.25 0-0.50.05-0.750.15L2 8.3V13h2V9.65l1.75-0.75L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l0.6-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtTransferWithinAStation;
