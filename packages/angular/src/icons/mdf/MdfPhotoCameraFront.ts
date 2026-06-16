import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-photo-camera-front",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPhotoCameraFront {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18 10.48 4-3.98v11l-4-3.98V18c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2V6c0-1.10.9-2 2-2h12c1.1 0 2 0.9 2 2v4.48zm-2-0.79V6H4v12h12V9.69zM10 12c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm0 1c1.34 0 4 0.67 4 2v1H6v-1c0-1.33 2.66-2 4-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPhotoCameraFront;
