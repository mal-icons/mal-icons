import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-angular-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevAngularIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M583.4 100 563 421.4 367.3 0zM448 515.6 300 600l-147.9-84.4 30.1-72.9h235.6zM300 160l77.5 188.3h-155zM36.8 421.4 16.6 100 232.7 0z"}],["path",{"fill":"currentColor","d":"M583.4 100 563 421.4 367.3 0zM448 515.6 300 600l-147.9-84.4 30.1-72.9h235.6zM300 160l77.5 188.3h-155zM36.8 421.4 16.6 100 232.7 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevAngularIcon;
