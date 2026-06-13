import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-view-column",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiViewColumn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"View Column"}],["path",{"d":"M18.44,3.06H5.56a2.51,2.51,0,0,0-2.5,2.5V18.44a2.51,2.51,0,0,0,2.5,2.5H18.44a2.51,2.51,0,0,0,2.5-2.5V5.56A2.51,2.51,0,0,0,18.44,3.06ZM8.67,19.94H5.56a1.51,1.51,0,0,1-1.5-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5H8.67Zm1-15.88h4.66V19.94H9.67ZM19.94,18.44a1.51,1.51,0,0,1-1.5,1.5H15.33V4.06h3.11a1.5,1.5,0,0,1,1.5,1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiViewColumn;
