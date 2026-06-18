import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bitwig",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBitwig {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.15 7.78a1.59 1.59 0 1 1 3.18 0 1.59 1.59 0 0 1-3.18 0zm5.74 1.59a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18zm4.22 0a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18zm4.15 0a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18zM5.74 10.41a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18zm8.37 0a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18zm4.15 0a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18zm4.15 3.18a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18zM1.59 10.41a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18zm4.15 4.22a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18zm12.52 0a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18zm4.15 0a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18zm-20.82 0a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18m8.3-4.22a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBitwig;
