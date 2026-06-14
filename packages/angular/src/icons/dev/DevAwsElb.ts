import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-aws-elb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevAwsElb {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-aws-elb-2-a)"}],["path",{"fill":"currentColor","d":"M600 0H0v600h600z"}],["path",{"fill":"currentColor","d":"M225 397.5a97.6 97.6 0 0 1 0-195 97.6 97.6 0 0 1 0 195m225 45a30 30 0 1 1-60 0 30 30 0 0 1 60 0m-30-315a30 30 0 1 1 0 60 30 30 0 0 1 0-60M442.5 270a30 30 0 1 1 0 60 30 30 0 0 1 0-60m-105.4 37.5h61a45 45 0 1 0 0-15h-61q-1.5-21.6-10.3-40l66.5-58.8a45 45 0 1 0-10.5-10.8l-63.4 56a112.4 112.4 0 1 0 0 122.2l63.5 56a45 45 0 1 0 10.5-10.8l-66.6-58.7q8.8-18.6 10.3-40.1"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevAwsElb;
