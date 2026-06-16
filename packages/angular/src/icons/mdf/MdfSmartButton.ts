import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-smart-button",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSmartButton {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 9v6c0 1.1-0.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-0.9-2-2V9c0-1.10.9-2 2-2h16c1.1 0 2 0.9 2 2zm-7.5 10 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5 0.62-1.38L19 12l-1.38-0.62L17 10l-0.62 1.38L15 12l1.380.62L17 14zm-2.5 5 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5 0.62-1.38L19 12l-1.38-0.62L17 10l-0.62 1.38L15 12l1.380.62L17 14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSmartButton;
