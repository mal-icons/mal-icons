import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-file-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiFileOn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"File On"}],["path",{"d":"M19.49,7.35l-4.97-4.86a1.47,1.47,0,0,0-1.05-0.43h-6.9a2.5,2.5,0,0,0-2.5,2.5V19.44a2.51,2.51,0,0,0,2.5,2.5h10.87a2.51,2.51,0,0,0,2.5-2.5V8.42A1.49,1.49,0,0,0,19.49,7.35Zm-1.270.15h-2.34a1.5,1.5,0,0,1-1.5-1.5V3.75Zm0.72,11.94a1.5,1.5,0,0,1-1.5,1.5H6.57a1.5,1.5,0,0,1-1.5-1.5V4.56a1.5,1.5,0,0,1,1.5-1.5h6.81V6a2.5,2.5,0,0,0,2.5,2.5h3.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiFileOn;
