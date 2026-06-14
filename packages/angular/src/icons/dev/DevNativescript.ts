import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-nativescript",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevNativescript {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-nativescript-1-a)"}],["path",{"fill":"currentColor","d":"M556 44a150 150 0 0 1 44 106v300q-1.5 63.7-44 106a150 150 0 0 1-106 44H150q-63.7-1.5-106-44A150 150 0 0 1 0 450V150Q1.5 86.3 44 44A150 150 0 0 1 150 0h300q63.7 1.5 106 44m-41.3 241.4A50 50 0 0 1 500 250V150a49.6 49.6 0 0 0-50-50h-50v250L200 100h-50a49.5 49.5 0 0 0-50 50v100a50 50 0 0 1-50 50 50 50 0 0 1 50 50v100a49.5 49.5 0 0 0 50 50h50V250l200 250h50a49.6 49.6 0 0 0 50-50V350a50 50 0 0 1 50-50q-21.2-0.6-35.3-14.6"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevNativescript;
