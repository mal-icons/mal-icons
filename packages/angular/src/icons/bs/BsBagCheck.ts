import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bag-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBagCheck {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10.85 8.15a0.50.5 0 0 1 0 0.71l-3 3a0.50.5 0 0 1-0.71 0l-1.5-1.5a0.50.5 0 0 1 0.71-0.71L7.5 10.79l2.65-2.65a0.50.5 0 0 1 0.71 0"}],["path",{"d":"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-0.5A2.5 2.5 0 0 1 8 1m3.5 3v-0.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBagCheck;
