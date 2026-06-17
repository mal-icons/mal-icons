import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-card-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCardList {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.5 3a0.50.5 0 0 1 0.50.5v9a0.50.5 0 0 1-0.50.5h-13a0.50.5 0 0 1-0.5-0.5v-9a0.50.5 0 0 1 0.5-0.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"}],["path",{"d":"M5 8a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0 1h-7A0.50.5 0 0 1 5 8m0-2.5a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1-0.5-0.5m0 5a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1-0.5-0.5m-1-5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0M4 8a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m0 2.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCardList;
