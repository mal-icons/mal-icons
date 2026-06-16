import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-water-loss",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWaterLoss {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M444-330q-52 0-102 14.5T247-275l15 135h435l18-150h-18q-37 0-68-5.5T544-316q-25-7-49.5-10.5T444-330Zm-204-10q47-24 99-37t105-13q30 0 59.5 4t56.5 12q51 14 78 19t58 5h25l52-470H187l53 480ZM208-80l-88-800h720L752-80H208Zm236-60h253-435 182Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWaterLoss;
