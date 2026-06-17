import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-gender-ambiguous",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGenderAmbiguous {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M11.5 1a0.50.5 0 0 1 0-1h4a0.50.5 0 0 1 0.50.5v4a0.50.5 0 0 1-1 0V1.71l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a0.50.5 0 0 1 0 1H8.5v1.5a0.50.5 0 0 1-1 0V14H6a0.50.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.47-6.65L14.29 1zm-1 4.35a3 3 0 1 0-5.01 3.31 3 3 0 0 0 5.01-3.31z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGenderAmbiguous;
