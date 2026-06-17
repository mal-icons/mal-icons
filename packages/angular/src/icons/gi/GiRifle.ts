import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-rifle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiRifle {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16S136 76 136 226v120c0 30 0 30 30 30h180c30 0 30 0 30-30V226C376 76 256 16 256 16zm0 75s60 30 60 135v60H196v-60c0-105 60-135 60-135zM148.63 421A12.63 12.63 0 0 0 136 433.63v49.74a12.63 12.63 0 0 0 12.63 12.63h214.74a12.63 12.63 0 0 0 12.63-12.63V433.63A12.63 12.63 0 0 0 363.37 421H148.63z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiRifle;
