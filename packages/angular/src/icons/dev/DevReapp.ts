import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-reapp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevReapp {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-reapp-1-a)"}],["path",{"fill":"currentColor","d":"M185.5 0S72.8 0 72.8 112.7v394.6s112.7 2.2 112.7-111V140.9a28 28 0 0 1 28.2-28.2h83.4C406.5 112.7 408.7 0 408.7 0z"}],["path",{"fill":"currentColor","d":"M414.5 203.8V459a28 28 0 0 1-28.2 28.2h-83.4C193.5 487.3 191.3 600 191.3 600h223.2s112.7 0 112.7-112.7V92.7s-112.7-2.2-112.7 111"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevReapp;
