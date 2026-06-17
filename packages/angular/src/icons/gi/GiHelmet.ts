import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-helmet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHelmet {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 76C123.45 76 16 183.45 16 316c0 43.72 11.45 84.7 31.88 120H196l31.88-64.69C191.87 359.55 166 325.94 166 286c0-49.71 40.29-90 90-90s90 40.29 90 90v30h150c0-132.55-107.45-240-240-240zm-4.22 150A60 60 0 0 0 196 286a60 60 0 0 0 120 0 60 60 0 0 0-64.22-60z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHelmet;
