import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-microsoft-onedrive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMicrosoftOnedrive {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m362.5 367.2 123.8-118.4a187.5 187.5 0 0 0-338.2-56.5c1.9 0 214.4 175 214.4 175"}],["path",{"fill":"currentColor","d":"M228.8 214.6a149 149 0 0 0-78.8-22.4h-2A150 150 0 0 0 27 428l185.5-23.2L354.7 290z"}],["path",{"fill":"currentColor","d":"M486.3 248.8q-4-0.3-8.2-0.3c-16.6 0-33 3.3-48.3 10l-75 31.5 82.7 102.2 147.9 36a122 122 0 0 0-99-179.4"}],["path",{"fill":"currentColor","d":"M27 428a150 150 0 0 0 123 64.2h328a122 122 0 0 0 107.3-64L354.7 290z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMicrosoftOnedrive;
