import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-cakephp-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevCakephpIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M0 346.9c0 51.6 134.3 93.6 300 93.6v93.6c-165.7 0-300-41.9-300-93.6zm600 0v93.6c0 22-24.5 42.3-65.4 58.3L300 440.5v-93.6l234.7 58.3c40.9-16 65.4-36.3 65.4-58.3m-300-281c165.6 0 300 42 300 93.6v93.7c0 22-24.5 42.4-65.4 58.3L300 253.2V347C134.3 347 0 305 0 253.3v-93.7C0 108 134.3 66 300 66","clip-rule":"evenodd"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevCakephpIcon;
