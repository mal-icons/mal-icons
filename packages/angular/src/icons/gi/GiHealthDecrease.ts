import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-health-decrease",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHealthDecrease {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M196 16c-16.62 0-30 13.38-30 30v120H46c-16.62 0-30 13.38-30 30v120c0 16.62 13.38 30 30 30h120v120c0 16.62 13.38 30 30 30h120c16.62 0 30-13.38 30-30V346h120c16.62 0 30-13.38 30-30V196c0-16.62-13.38-30-30-30H346V46c0-16.62-13.38-30-30-30zm0 135h120l-60 60zm0 75h120l-60 60zm0 75h120l-60 60z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHealthDecrease;
