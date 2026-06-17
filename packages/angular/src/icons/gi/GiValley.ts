import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-valley",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiValley {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M253.84 20.72L189.03 192.31l-49.31-47.19-60.5 150.84H441.81l-57-94.56-66.03 68.13-13.41-13.03 37.94-39.12-89.47-196.66zM20.47 314.65v178.72h175.75l49.94-78.63-36.06-34.84 43.88-65.25H20.47zm261.19 0l-35.5 55.31 58.47 47.25-2.13 76.16h193v-178.72H281.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiValley;
