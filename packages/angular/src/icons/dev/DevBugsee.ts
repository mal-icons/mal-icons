import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-bugsee",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevBugsee {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M600 366.6h-22.3a123.3 123.3 0 0 0-230 86.2h-40v-37.5H297v37.5h-38V415h-49v37.8h-36v-38h-13v38h-36.3V415H99.5v37.8H0c0-228 215.8-344.4 393.8-293.6q3.3-8.6 15-12 11 5.8 15.1 22.3 8.3 3.4 16.5 7.3s9.8-10 23.6-9.9c7 10.2 7 26.7 7 26.7 56 35.6 102.6 92.5 129 173"}],["path",{"fill":"currentColor","d":"M445.8 240.4a30.8 30.8 0 1 1-61.6 0 30.8 30.8 0 0 1 61.6 0"}],["path",{"fill":"currentColor","d":"M438.5 249.5a11.8 11.8 0 1 1-23.5 0 11.8 11.8 0 0 1 23.5 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevBugsee;
