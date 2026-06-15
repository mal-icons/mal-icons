import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-insecure",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrInsecure {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M7 6.92V6a4.72 4.72 0 15-5 4.72 4.72 0 15 5v5.05M12 23a7 7 0 10-7-7 7 7 0 7 7zm2.99-7h-5.97"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrInsecure;
