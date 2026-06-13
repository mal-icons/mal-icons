import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-image-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiImageOn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Image On"}],["path",{"d":"M18.43,3.06H5.57a2.5,2.5,0,0,0-2.5,2.5V18.44a2.51,2.51,0,0,0,2.5,2.5h12.87a2.51,2.51,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.43,3.06ZM4.07,5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5v8.66l-3.88-3.88a1.51,1.51,0,0,0-2.12,0l-4.56,4.57a0.510.51,0,0,1-0.71,0l-0.56-0.56a1.52,1.52,0,0,0-2.12,0l-1.92,1.92Zm15.87,12.88a1.5,1.5,0,0,1-1.5,1.5H5.57a1.5,1.5,0,0,1-1.5-1.5v-0.75L6.7,15.06a0.50.5,0,0,1,0.35-0.140.520.52,0,0,1,0.360.14l0.550.56a1.51,1.51,0,0,0,2.12,0l4.57-4.57a0.50.5,0,0,1,0.71,0l4.58,4.58Z"}],["path",{"d":"M8.06,10.57a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,8.06,10.57Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,8.06,6.57Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiImageOn;
