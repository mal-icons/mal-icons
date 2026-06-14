import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-frontapp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevFrontapp {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M90 99.8A100 100 0 0 1 189.8 0H510v142a50 50 0 0 1-50 50H329.3a48 48 0 0 0-47.2 47.3v310.8a50 50 0 0 1-50 49.9H90z"}],["path",{"fill":"currentColor","d":"M201.6 241.2a129.6 129.6 0 1 0 259.2 0 129.6 129.6 0 0 0-259.2 0"}],["path",{"fill":"currentColor","d":"M201.6 241.2a129.6 129.6 0 1 0 259.2 0 129.6 129.6 0 0 0-259.2 0","opacity":".5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevFrontapp;
