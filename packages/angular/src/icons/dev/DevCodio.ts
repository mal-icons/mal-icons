import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-codio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevCodio {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m294.7 434.8 1.9 158.2 3.4 7 259.8-150-147.1-85.1-112.7 65z"}],["path",{"fill":"currentColor","d":"M40.2 450 300 600V430l-112.5-65V228.9L49.8 150h-9.6z"}],["path",{"fill":"currentColor","d":"m45.8 153.2 137 79.2 4.7 2.7 112.5-65 112.7 65 147-85L300 0 40.2 150z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevCodio;
