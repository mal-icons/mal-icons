import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-exposure-plus-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrExposurePlus1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 7c-0.55 0-1 0.45-1 1v3H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h3v3c0 0.550.45 1 1 1s1-0.45 1-1v-3h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3V8c0-0.55-0.45-1-1-1zm11 11h-2V7.38L15 8.4V6.7L19.7 5h0.3v13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrExposurePlus1;
