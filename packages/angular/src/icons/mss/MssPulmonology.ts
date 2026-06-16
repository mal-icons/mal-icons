import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-pulmonology",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPulmonology {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440-120H80v-295l132-345h178v140h-60v-80h-76L140-404v224h240v-120h60v180Zm439 0H519v-180h60v120h240v-224L704-700h-74v80h-60v-140h176l133 345v295ZM355-435Zm249 0Zm-124-82L376-414l-42-42 116-116v-308h60v308l115 116-42 42-103-103Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPulmonology;
