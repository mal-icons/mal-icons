import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-datacamp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDatacamp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.95 18.15v-5.24L21.21 8.2 19.2 7.05l-6.25 3.57V5.36c0-0.36-0.19-0.69-0.5-0.87L4.920.18a1.43 1.43 0 0 0-1.450.04 1.44 1.44 0 0 0-0.68 1.22v14.78A1.44 1.44 0 0 0 4.92 17.49l6.03-3.44v4.68a1 1 0 0 0 0.50.87l7.73 4.4 2.01-1.15-8.25-4.7zM10.95 5.94v5.81L4.79 15.27V2.4l6.17 3.54v0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDatacamp;
