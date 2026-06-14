import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-incident-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevIncidentIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M245.6 599.3v-81h106V600c98-23.4 171-112 171-217.8 0-86.1-61.2-207.2-132-244.7 9.5 33.6-4.8 77.4-23.8 73.6-7.2-1.5-8-12.8-9.1-31.2-2.5-38.3-6.8-107.4-76.8-179.9-5.6 50.6-85.9 153.8-138.1 221l-19.6 25.2a224.7 224.7 0 0 0 122.4 353.1m113.3-172a59.3 59.3 0 0 1-101 42 59.3 59.3 0 0 1-5-78.1l5.1-6.7c14-17.9 35.2-45.3 36.7-58.7 44 29.7 64.2 78.6 64.2 101.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevIncidentIcon;
