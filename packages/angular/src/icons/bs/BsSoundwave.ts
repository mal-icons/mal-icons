import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-soundwave",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSoundwave {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8.5 2a0.50.5 0 0 1 0.50.5v11a0.50.5 0 0 1-1 0v-11a0.50.5 0 0 1 0.5-0.5m-2 2a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-1 0v-7a0.50.5 0 0 1 0.5-0.5m4 0a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-1 0v-7a0.50.5 0 0 1 0.5-0.5m-6 1.5A0.50.5 0 0 1 5 6v4a0.50.5 0 0 1-1 0V6a0.50.5 0 0 1 0.5-0.5m8 0a0.50.5 0 0 1 0.50.5v4a0.50.5 0 0 1-1 0V6a0.50.5 0 0 1 0.5-0.5m-10 1A0.50.5 0 0 1 3 7v2a0.50.5 0 0 1-1 0V7a0.50.5 0 0 1 0.5-0.5m12 0a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-1 0V7a0.50.5 0 0 1 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSoundwave;
