import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-aruba",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrAruba {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M12.11,17.3 C9.04,17.3 6.51,14.84 6.51,11.84 C6.51,8.83 9.04,6.37 12.11,6.37 C15.18,6.37 17.71,8.83 17.71,11.84 C17.71,14.84 15.18,17.3 12.11,17.3 L12.11,17.3 Z M12.11,2 C6.51,2 2,6.44 2,11.84 C2,17.3 6.51,21.67 12.11,21.67 C14.43,21.67 16.55,20.92 18.26,19.62 C19.28,21.33 22.22,21.67 22.22,21.67 L22.22,11.84 C22.22,6.44 17.71,2 12.11,2 L12.11,2 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrAruba;
