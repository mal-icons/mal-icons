import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-cooking-pot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCookingPot {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 100c-8 0-16 4-32 12l10.85 32.54C179.67 147.23 112.76 160.04 98.68 183h314.63c-7.01-11.42-27.09-20.33-52.3-26.74V135h-18v17.27c-21.2-4.11-44.4-6.68-65.85-7.72L288 112c-16-8-24-12-32-12zM96 201v14H55v18h41v151c0 16 16 32 32 32h256c16 0 32-16 32-32V233h41v-18h-41v-14H96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCookingPot;
