import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-brush",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrBrush {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M10.44,13.85 C8.67,14.62 7.44,16.38 7.44,18.44 C7.44,21.2 12.44,25.44 12.44,25.44 C12.44,25.44 17.44,21.2 17.44,18.44 C17.44,16.38 16.2,14.62 14.44,13.85 L14.44,-0.56 C14.44,-1.67 13.54,-2.56 12.44,-2.56 C11.32,-2.56 10.44,-1.67 10.44,-0.56 L10.44,13.85 Z M10,12 L12.6,12 L15,12","transform":"rotate(45 12.435 11.435)"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrBrush;
