import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-keystonejs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevKeystonejs {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-keystonejs-2-a)"}],["path",{"fill":"currentColor","d":"M139.8 0h320.4c48.6 0 66.2 5 84 14.6a99 99 0 0 1 41.2 41.2c9.5 17.8 14.6 35.4 14.6 84v320.4c0 48.6-5 66.2-14.6 84a99 99 0 0 1-41.2 41.2c-17.8 9.5-35.4 14.6-84 14.6H139.8c-48.6 0-66.2-5-84-14.6a99 99 0 0 1-41.2-41.2C5 526.4 0 508.8 0 460.2V139.8c0-48.6 5-66.2 14.6-84a99 99 0 0 1 41.2-41.2C73.6 5 91.2 0 139.8 0M172 154.8v311.6h68.5V366l39.3-39.7 93.8 140h86L326 278l121.7-123.1h-85.5L240.4 284V154.8z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevKeystonejs;
