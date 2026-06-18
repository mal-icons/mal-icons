import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-face-mask",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFaceMask {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 14.5h-0.22c-1.53 0 -2.78 -1.12 -2.78 -2.5s1.24 -2.5 2.78 -2.5h0.22"}],["path",{"d":"M19 14.5h0.22c1.53 0 2.78 -1.12 2.78 -2.5s-1.24 -2.5 -2.78 -2.5h-0.22"}],["path",{"d":"M9 10h6"}],["path",{"d":"M9 14h6"}],["path",{"d":"M12.55 18.84l5 -1.43a2 2 0 0 0 1.45 -1.92v-6.98a2 2 0 0 0 -1.45 -1.92l-5 -1.43a2 2 0 0 0 -1.1 0l-5 1.43a2 2 0 0 0 -1.45 1.92v6.98a2 2 0 0 0 1.45 1.92l5 1.43a2 2 0 0 0 1.1 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFaceMask;
