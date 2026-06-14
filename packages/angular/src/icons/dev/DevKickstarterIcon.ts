import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-kickstarter-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevKickstarterIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m468.8 300.1 54.5-54.2a143.6 143.6 0 0 0 0-203.7 146 146 0 0 0-205 0l-20 19.8a145 145 0 0 0-119-62c-80.1 0-145 64.5-145 144v312c0 79.5 64.9 144 145 144a145 145 0 0 0 119-62l20 19.8a146 146 0 0 0 205 0 143.6 143.6 0 0 0 0-203.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevKickstarterIcon;
