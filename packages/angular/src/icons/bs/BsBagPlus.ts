import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bag-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBagPlus {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8 7.5a0.50.5 0 0 1 0.50.5v1.5H10a0.50.5 0 0 1 0 1H8.5V12a0.50.5 0 0 1-1 0v-1.5H6a0.50.5 0 0 1 0-1h1.5V8a0.50.5 0 0 1 0.5-0.5"}],["path",{"d":"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-0.5A2.5 2.5 0 0 1 8 1m3.5 3v-0.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBagPlus;
