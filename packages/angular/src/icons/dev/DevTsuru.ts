import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-tsuru",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevTsuru {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M528.2 149.8q-1.5-1.5-2.8 0l-247 244q-1.3 1.5 0 2.8l48 60.3-8.7 67c0 1 0 2 1 2h1c0.9 0 0.9 0 1.8-1l207.7-373.2c1 0 0-2-1-2m71.8 86-48.8-86c0-1-1-1-2-1s-0.9 0-1.8 1L514.8 209v1.9c0 1 1 1 1 1l81.3 25.8h1c1 0 1 0 1.9-1zm-291 225v-2L3 74.2s-3 1-3 1.8l31.6 321.5-23 128.2h291c0.9 1 9.5-65 9.5-65"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevTsuru;
