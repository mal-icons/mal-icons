import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-outlined-flag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrOutlinedFlag {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14 6-0.72-1.45c-0.17-0.34-0.52-0.55-0.9-0.55H6c-0.55 0-1 0.45-1 1v15c0 0.550.45 1 1 1s1-0.45 1-1v-6h5l0.72 1.45a1 1 0 0 0 0.890.55H19c0.55 0 1-0.45 1-1V7c0-0.55-0.45-1-1-1h-5zm4 8h-4l-1-2H7V6h5l1 2h5v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrOutlinedFlag;
