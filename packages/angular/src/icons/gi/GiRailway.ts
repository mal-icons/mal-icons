import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-railway",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiRailway {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M18 112v39h38v-39zm102 0v39h48v-39zm112 0v39h48v-39zm112 0v39h48v-39zm112 0v39h38v-39zM18 169v30h476v-30zm0 48v78h38v-78zm102 0v78h48v-78zm112 0v78h48v-78zm112 0v78h48v-78zm112 0v78h38v-78zM18 313v30h476v-30zm0 48v39h38v-39zm102 0v39h48v-39zm112 0v39h48v-39zm112 0v39h48v-39zm112 0v39h38v-39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiRailway;
