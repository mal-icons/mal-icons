import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-tapcart-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevTapcartIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M570.9 229.5 405 63.8a99.7 99.7 0 0 0-141.3 0l-73.8 74a164.1 164.1 0 0 1 0 324.3l74.1 74.2a99.7 99.7 0 0 0 141.3 0L571 370.4a99.7 99.7 0 0 0 0-140.9m-383.2-89.4 2.3-2.2a164.2 164.2 0 1 0 0 324.2l-2.3-2.3a226 226 0 0 1 0-319.7"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevTapcartIcon;
