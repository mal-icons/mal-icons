import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-h-plus-mobiledata",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHPlusMobiledata {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 11H6V8c0-0.55-0.45-1-1-1s-1 0.45-1 1v8c0 0.550.45 1 1 1s1-0.45 1-1v-3h6v3c0 0.550.45 1 1 1s1-0.45 1-1V8c0-0.55-0.45-1-1-1s-1 0.45-1 1v3zm9 0h-1v-1c0-0.55-0.45-1-1-1s-1 0.45-1 1v1h-1c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v1c0 0.550.45 1 1 1s1-0.45 1-1v-1h1c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHPlusMobiledata;
